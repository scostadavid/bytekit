'use client'

import { useState, useEffect, useCallback } from 'react';

import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';


export default function Json() {
    return (
      <JsonFormatter />
    );
}

  
function JsonFormatter() {
    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')
    const [error, setError] = useState('')
  
    const formatJson = useCallback((value: string) => {
      try {
        if (!value.trim()) {
          setOutput('')
          setError('')
          return
        }
        const parsed = JSON.parse(value)
        setOutput(JSON.stringify(parsed, null, 2))
        setError('')
      } catch (err) {
        setError('Invalid JSON: ' + (err as Error).message)
        setOutput('')
      }
    }, [])
  
    useEffect(() => {
      const debounce = setTimeout(() => formatJson(input), 300)
      return () => clearTimeout(debounce)
    }, [input, formatJson])
  
    return (
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold">JSON Formatter & Validator</h2>
          <p className="text-muted-foreground">Format and validate your JSON data in real-time</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="json-input">Input JSON</Label>
            <Textarea
              id="json-input"
              placeholder="Paste your JSON here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={cn("h-[calc(100vh-250px)] min-h-[300px]", error && "border-red-500", "resize-none")}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="json-output">Formatted JSON</Label>
            <Textarea
              id="json-output"
              value={output}
              readOnly
              className="h-[calc(100vh-250px)] min-h-[300px] resize-none"
            />
          </div>
        </div>
      </div>
    )
  }
  