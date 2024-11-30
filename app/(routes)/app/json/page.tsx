'use client'

import { useState, useEffect, useCallback } from 'react';

import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';


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
    }, []);
  
    useEffect(() => {
      const debounce = setTimeout(() => formatJson(input), 300)
      return () => clearTimeout(debounce)
    }, [input, formatJson]);
    
    const {toast} = useToast();
    
    const copyOutput = () => {
      return toast({
        title: "Success",
        description: "Copied to clipboard",
      })
      // navigator.clipboard.writeText(output).then(() => {
      //   console.log('Copied to clipboard:', output);
      //   return toast({
      //     title: "Success",
      //     description: "Copied to clipboard",
      //   })
      // }).catch((err) => {
      //   return toast({
      //     title: "Failed to copy",
      //     description: `Check your clipboard api permissions and try again [${err.message}]`,
      //   })
      // });
    }

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex flex-row justify-between">
              <Label htmlFor="json-input">Input: </Label>
              <Button variant="outline" onClick={() => setInput('')}>clear</Button>
            </div>
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
            <div className="flex flex-row justify-between">
              <Label htmlFor="json-input">Output: </Label>
              <Button variant="outline" onClick={copyOutput} disabled={!output}>copy</Button>
            </div>
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
  