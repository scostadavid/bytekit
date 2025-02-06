"use client"

import * as React from "react"
import { Copy } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DateFormat {
  id: string
  label: string
  example: string
  placeholder: string
  parse: (value: string) => Date
  format: (date: Date) => string
}

const timezones = [
  { value: "UTC", label: "UTC" },
  { value: "America/New_York", label: "New York (EST/EDT)" },
  { value: "America/Los_Angeles", label: "Los Angeles (PST/PDT)" },
  { value: "Europe/London", label: "London (GMT/BST)" },
  { value: "Europe/Paris", label: "Paris (CET/CEST)" },
  { value: "Asia/Tokyo", label: "Tokyo (JST)" },
  { value: "Asia/Shanghai", label: "Shanghai (CST)" },
  { value: "Australia/Sydney", label: "Sydney (AEST/AEDT)" },
  { value: "America/Sao_Paulo", label: "São Paulo (BRT/BRST)" }
]

const dateFormats: DateFormat[] = [
  {
    id: "unix",
    label: "Unix Timestamp",
    example: "1710633600",
    placeholder: "e.g., 1710633600",
    parse: (value) => new Date(parseInt(value) * 1000),
    format: (date) => Math.floor(date.getTime() / 1000).toString()
  },
  {
    id: "iso",
    label: "ISO 8601",
    example: "2024-03-17T12:00:00.000Z",
    placeholder: "e.g., 2024-03-17T12:00:00.000Z",
    parse: (value) => new Date(value),
    format: (date) => date.toISOString()
  },
  {
    id: "utc",
    label: "UTC String",
    example: "Sun, 17 Mar 2024 12:00:00 GMT",
    placeholder: "e.g., Sun, 17 Mar 2024 12:00:00 GMT",
    parse: (value) => new Date(value),
    format: (date) => date.toUTCString()
  },
  {
    id: "local",
    label: "Local Date String",
    example: "3/17/2024, 12:00:00 PM",
    placeholder: "e.g., 3/17/2024, 12:00:00 PM",
    parse: (value) => new Date(value),
    format: (date) => date.toLocaleString()
  }
]

export function DateConverter() {
  const { toast } = useToast()
  const [values, setValues] = React.useState<Record<string, string>>({})
  const [activeFormat, setActiveFormat] = React.useState<string | null>(null)
  const [selectedTimezone, setSelectedTimezone] = React.useState("UTC")
  const [timestamp, setTimestamp] = React.useState<number | null>(null)

  const formatTimezoneDate = (timestamp: number, timezone: string) => {
    return new Date(timestamp).toLocaleString('en-US', {
      timeZone: timezone,
      dateStyle: 'full',
      timeStyle: 'long'
    })
  }

  const updateAllValues = (date: Date) => {
    const ts = date.getTime()
    setTimestamp(ts)

    const newValues = {
      ...dateFormats.reduce((acc, fmt) => ({
        ...acc,
        [fmt.id]: fmt.format(date)
      }), {}),
      timezone: formatTimezoneDate(ts, selectedTimezone)
    }
    setValues(newValues)
  }

  const handleInputChange = (format: DateFormat, value: string) => {
    try {
      setActiveFormat(format.id)
      setValues((prev) => ({ ...prev, [format.id]: value }))

      if (!value) {
        setValues({})
        setTimestamp(null)
        return
      }

      const date = format.parse(value)
      
      if (isNaN(date.getTime())) {
        throw new Error("Invalid date")
      }

      updateAllValues(date)
    } catch {
      setValues((prev) => ({ ...prev, [format.id]: value }))
    }
  }

  const handleTimezoneChange = (newTimezone: string) => {
    if (timestamp === null) return

    setSelectedTimezone(newTimezone)
    setValues(prev => ({
      ...prev,
      timezone: formatTimezoneDate(timestamp, newTimezone)
    }))
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: "Date format copied to clipboard"
    })
  }

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Date Converter</h1>
          <p className="text-muted-foreground">
            Convert between different date formats and timezones. Type in any format to see the conversions.
          </p>
        </div>

        <Alert className="bg-muted">
          <AlertDescription>
            <div className="grid gap-2">
              <span className="font-semibold">Format Examples:</span>
              {dateFormats.map((format) => (
                <div key={format.id} className="grid grid-cols-[120px,1fr] gap-2 text-sm">
                  <span className="font-medium">{format.label}:</span>
                  <span>{format.example}</span>
                </div>
              ))}
            </div>
          </AlertDescription>
        </Alert>

        <div className="grid gap-4">
          {dateFormats.map((format) => (
            <div key={format.id} className="grid gap-2">
              <Label htmlFor={format.id}>{format.label}</Label>
              <div className="flex gap-2">
                <Input
                  id={format.id}
                  placeholder={format.placeholder}
                  value={values[format.id] || ""}
                  onChange={(e) => handleInputChange(format, e.target.value)}
                  className={activeFormat === format.id ? "border-primary" : ""}
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => values[format.id] && copyToClipboard(values[format.id])}
                  disabled={!values[format.id]}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}

          <div className="grid gap-2">
            <div className="flex justify-between items-center">
              <Label>Timezone Specific</Label>
              <Select value={selectedTimezone} onValueChange={handleTimezoneChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  {timezones.map((tz) => (
                    <SelectItem key={tz.value} value={tz.value}>
                      {tz.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Input
                value={values.timezone || ""}
                placeholder="Select a timezone to see the date in that timezone"
                readOnly
                className="bg-muted"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => values.timezone && copyToClipboard(values.timezone)}
                disabled={!values.timezone}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 