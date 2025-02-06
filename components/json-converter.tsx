"use client"

import * as React from "react"
import { Copy, Download, Upload, Check, RefreshCcw, Trash, ChevronDown } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface FormatOptions {
  indentSize: number
  sortKeys: boolean
  removeComments: boolean
  compactMode: boolean
}

export function JsonConverter() {
  const { toast } = useToast()
  const [input, setInput] = React.useState("")
  const [output, setOutput] = React.useState("")
  const [error, setError] = React.useState<string | null>(null)
  const [formatOptions, setFormatOptions] = React.useState<FormatOptions>({
    indentSize: 2,
    sortKeys: false,
    removeComments: true,
    compactMode: false,
  })
  const [showOptions, setShowOptions] = React.useState(false)

  const handleFormat = () => {
    try {
      if (!input.trim()) {
        setOutput("")
        setError(null)
        return
      }

      let processedInput = input
      if (formatOptions.removeComments) {
        processedInput = processedInput.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "")
      }

      let parsed = JSON.parse(processedInput)

      if (formatOptions.sortKeys) {
        parsed = sortObjectKeys(parsed)
      }

      const formatted = formatOptions.compactMode
        ? JSON.stringify(parsed)
        : JSON.stringify(parsed, null, formatOptions.indentSize)

      setOutput(formatted)
      setError(null)

      toast({
        title: "Success",
        description: "JSON formatted successfully",
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON")
      setOutput("")
    }
  }

  const sortObjectKeys = (obj: unknown): unknown => {
    if (Array.isArray(obj)) {
      return obj.map(sortObjectKeys)
    }
    
    if (obj !== null && typeof obj === "object") {
      return Object.keys(obj)
        .sort()
        .reduce<Record<string, unknown>>((result, key) => {
          result[key] = sortObjectKeys((obj as Record<string, unknown>)[key])
          return result
        }, {})
    }
    
    return obj
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: "JSON copied to clipboard",
    })
  }

  const handleDownload = () => {
    const blob = new Blob([output], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "formatted.json"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    
    toast({
      title: "Downloaded!",
      description: "JSON file downloaded successfully",
    })
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const content = e.target?.result as string
      setInput(content)
    }
    reader.readAsText(file)
  }

  const handleClear = () => {
    setInput("")
    setOutput("")
    setError(null)
  }

  const examples = {
    simple: `{
  "name": "John Doe",
  "age": 30,
  "city": "New York"
}`,
    complex: `{
  "user": {
    "name": "John Doe",
    "age": 30,
    "address": {
      "street": "123 Main St",
      "city": "New York"
    },
    "hobbies": ["reading", "gaming"]
  }
}`
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">JSON Formatter</h1>
          <p className="text-muted-foreground">
            Format, validate, and beautify your JSON data with advanced options.
          </p>
        </div>

        <Alert className="bg-muted">
          <AlertDescription>
            <Collapsible open={showOptions} onOpenChange={setShowOptions}>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Formatting Options:</span>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <ChevronDown className={`h-4 w-4 transition-transform ${showOptions ? "rotate-180" : ""}`} />
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="mt-2">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label>Indent Size</Label>
                    <Select
                      value={formatOptions.indentSize.toString()}
                      onValueChange={(value) =>
                        setFormatOptions((prev) => ({ ...prev, indentSize: parseInt(value) }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select indent size" />
                      </SelectTrigger>
                      <SelectContent>
                        {[2, 4, 6, 8].map((size) => (
                          <SelectItem key={size} value={size.toString()}>
                            {size} spaces
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Additional Options</Label>
                    <div className="flex flex-col gap-2">
                      <Button
                        variant={formatOptions.sortKeys ? "default" : "outline"}
                        size="sm"
                        onClick={() =>
                          setFormatOptions((prev) => ({ ...prev, sortKeys: !prev.sortKeys }))
                        }
                      >
                        {formatOptions.sortKeys ? <Check className="mr-2 h-4 w-4" /> : null}
                        Sort Keys
                      </Button>
                      <Button
                        variant={formatOptions.removeComments ? "default" : "outline"}
                        size="sm"
                        onClick={() =>
                          setFormatOptions((prev) => ({
                            ...prev,
                            removeComments: !prev.removeComments,
                          }))
                        }
                      >
                        {formatOptions.removeComments ? <Check className="mr-2 h-4 w-4" /> : null}
                        Remove Comments
                      </Button>
                      <Button
                        variant={formatOptions.compactMode ? "default" : "outline"}
                        size="sm"
                        onClick={() =>
                          setFormatOptions((prev) => ({
                            ...prev,
                            compactMode: !prev.compactMode,
                          }))
                        }
                      >
                        {formatOptions.compactMode ? <Check className="mr-2 h-4 w-4" /> : null}
                        Compact Mode
                      </Button>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </AlertDescription>
        </Alert>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Input JSON</Label>
              <div className="flex gap-2">
                <input
                  type="file"
                  accept=".json"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="json-upload"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => document.getElementById("json-upload")?.click()}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload
                </Button>
                <Button variant="outline" size="sm" onClick={handleClear}>
                  <Trash className="mr-2 h-4 w-4" />
                  Clear
                </Button>
              </div>
            </div>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste your JSON here..."
              className="min-h-[400px] font-mono"
            />
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setInput(examples.simple)}
              >
                Simple Example
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setInput(examples.complex)}
              >
                Complex Example
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Formatted Output</Label>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => output && handleCopy(output)}
                  disabled={!output}
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownload}
                  disabled={!output}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleFormat}
                  disabled={!input}
                >
                  <RefreshCcw className="mr-2 h-4 w-4" />
                  Format
                </Button>
              </div>
            </div>
            <Textarea
              value={output}
              readOnly
              placeholder="Formatted JSON will appear here..."
              className={`min-h-[400px] font-mono ${error ? "border-red-500" : ""}`}
            />
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 