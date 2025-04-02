'use client';

import * as React from 'react';
import { Copy, Download, Upload, Check, RefreshCw, Trash, ChevronDown } from 'lucide-react';
import { format } from 'sql-formatter';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

interface FormatOptions {
  indentSize: number;
  uppercase: boolean;
  removeComments: boolean;
}

const SQL_DIALECTS = [
  'sql',
  'postgresql',
  'mysql',
  'mariadb',
  'db2',
  'plsql',
  'n1ql',
  'redshift',
  'spark',
  'tsql',
] as const;

export function SqlFormatter() {
  const { toast } = useToast();
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);
  const [formatOptions, setFormatOptions] = React.useState<FormatOptions>({
    indentSize: 2,
    uppercase: true,
    removeComments: true,
  });
  const [showOptions, setShowOptions] = React.useState(false);
  const [dialect, setDialect] = React.useState<typeof SQL_DIALECTS[number]>('sql');

  const handleFormat = () => {
    try {
      if (!input.trim()) {
        setOutput('');
        setError(null);
        return;
      }

      // Remove comentários se a opção estiver ativada
      let processedInput = input;
      if (formatOptions.removeComments) {
        processedInput = processedInput.replace(/--.*$|\/\*[\s\S]*?\*\//gm, '');
      }

      const formatted = format(processedInput, {
        language: dialect,
        tabWidth: formatOptions.indentSize,
        useTabs: false,
        keywordCase: formatOptions.uppercase ? 'upper' : 'preserve',
        linesBetweenQueries: 2,
      });

      setOutput(formatted);
      setError(null);

      toast({
        title: 'Success',
        description: 'SQL formatted successfully',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid SQL syntax');
      setOutput('');
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: 'SQL copied to clipboard',
    });
  };

  const handleDownload = () => {
    const blob = new Blob([output], { type: 'text/sql' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formatted.sql';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: 'Downloaded!',
      description: 'SQL file downloaded successfully',
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setInput(content);
    };
    reader.readAsText(file);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError(null);
  };

  const examples = {
    simple: `SELECT * FROM users WHERE id = 1;`,
    complex: `-- Create users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/* Insert sample data */
INSERT INTO users (name, email) VALUES ('Jao Dao', 'jao@example.com');

-- Query with join
SELECT u.name, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2025-04-01'
GROUP BY u.name
HAVING COUNT(o.id) > 0
ORDER BY order_count DESC;`
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">SQL Formatter</h1>
          <p className="text-muted-foreground">
            Format, validate, and beautify your SQL queries with advanced options.
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
                  <div className="space-y-2">
                    <Label>SQL Dialect</Label>
                    <Select
                      value={dialect}
                      onValueChange={(value) => setDialect(value as typeof SQL_DIALECTS[number])}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select SQL dialect" />
                      </SelectTrigger>
                      <SelectContent>
                        {SQL_DIALECTS.map((d) => (
                          <SelectItem key={d} value={d}>
                            {d.toUpperCase()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
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
                        variant={formatOptions.uppercase ? "default" : "outline"}
                        size="sm"
                        onClick={() =>
                          setFormatOptions((prev) => ({ ...prev, uppercase: !prev.uppercase }))
                        }
                      >
                        {formatOptions.uppercase ? <Check className="mr-2 h-4 w-4" /> : null}
                        Uppercase Keywords
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
              <Label>Input SQL</Label>
              <div className="flex gap-2">
                <input
                  type="file"
                  accept=".sql,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="sql-upload"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => document.getElementById("sql-upload")?.click()}
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
              placeholder="Paste your SQL here..."
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
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Format
                </Button>
              </div>
            </div>
            <Textarea
              value={output}
              readOnly
              placeholder="Formatted SQL will appear here..."
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
  );
}