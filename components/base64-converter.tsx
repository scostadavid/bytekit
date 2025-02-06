"use client"

import * as React from "react"
import { File, Copy, Upload, Download } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"
import { Textarea } from "./ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Base64Converter() {
  const { toast } = useToast()
  const [base64String, setBase64String] = React.useState("")
  const [fileName, setFileName] = React.useState("")
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      const base64 = await fileToBase64(file)
      setBase64String(base64)
      setFileName(file.name)
    } catch {
      toast({
        title: "Error",
        description: "Failed to convert file to Base64",
        variant: "destructive"
      })
    }
  }

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (error) => reject(error)
    })
  }

  const base64ToFile = (base64String: string) => {
    try {
      const [header, base64Data] = base64String.split(',')
      const contentType = header.split(':')[1].split(';')[0]
      
      const byteCharacters = atob(base64Data)
      const byteArrays = []
      
      for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512)
        const byteNumbers = new Array(slice.length)
        
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i)
        }
        
        const byteArray = new Uint8Array(byteNumbers)
        byteArrays.push(byteArray)
      }
      
      const blob = new Blob(byteArrays, { type: contentType })
      const url = window.URL.createObjectURL(blob)
      
      const a = document.createElement('a')
      a.href = url
      a.download = `decoded-file${getFileExtension(contentType)}`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)

      toast({
        title: "Success",
        description: "File downloaded successfully"
      })
    } catch {
      toast({
        title: "Error",
        description: "Invalid Base64 string or file format",
        variant: "destructive"
      })
    }
  }

  const getFileExtension = (mimeType: string): string => {
    const extensions: Record<string, string> = {
      'image/jpeg': '.jpg',
      'image/png': '.png',
      'image/gif': '.gif',
      'application/pdf': '.pdf',
      'text/plain': '.txt',
      'application/json': '.json',
    }
    return extensions[mimeType] || ''
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: "Base64 string copied to clipboard"
    })
  }

  const handleBase64Input = (value: string) => {
    setBase64String(value)
  }

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Base64 Converter</h1>
          <p className="text-muted-foreground">
            Convert files to Base64 strings and vice-versa. Useful for embedding files in code or sending via APIs.
          </p>
        </div>

        <Alert className="bg-muted">
          <AlertDescription>
            <div className="grid gap-2">
              <span className="font-semibold">About Base64:</span>
              <div className="text-sm space-y-2">
                <p>• Base64 encoding converts binary data into ASCII text format</p>
                <p>• Commonly used for embedding images, PDFs, and other files in code</p>
                <p>• The output string will be approximately 33% larger than the input file</p>
                <p>• Format example: data:image/jpeg;base64,/9j/4AAQSkZJRg...</p>
              </div>
            </div>
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="encode" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="encode">File to Base64</TabsTrigger>
            <TabsTrigger value="decode">Base64 to File</TabsTrigger>
          </TabsList>
          
          <TabsContent value="encode" className="space-y-4">
            <div className="grid gap-2">
              <Label>Select File to Encode</Label>
              <div className="flex gap-2">
                <Input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Choose File {fileName && `(${fileName})`}
                </Button>
              </div>
            </div>

            <div className="grid gap-2">
              <div className="flex justify-between items-center">
                <Label>Base64 Output</Label>
                {base64String && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(base64String)}
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </Button>
                )}
              </div>
              <Textarea
                placeholder="Base64 string will appear here..."
                value={base64String}
                readOnly
                className="min-h-[200px] font-mono text-sm"
              />
            </div>
          </TabsContent>

          <TabsContent value="decode" className="space-y-4">
            <div className="grid gap-2">
              <Label>Paste Base64 String</Label>
              <Textarea
                placeholder="Paste your Base64 string here..."
                value={base64String}
                onChange={(e) => handleBase64Input(e.target.value)}
                className="min-h-[200px] font-mono text-sm"
              />
            </div>

            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => base64ToFile(base64String)}
              disabled={!base64String}
            >
              <Download className="mr-2 h-4 w-4" />
              Download File
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 