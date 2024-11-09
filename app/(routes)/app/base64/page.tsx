'use client'

import { useState, useCallback } from 'react';

import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export default function Hash() {
    return (
      <Base64FileConverter />
    );
}

function Base64FileConverter() {
  const [base64Input, setBase64Input] = useState('');
  const [fileInput, setFileInput] = useState<File | null>(null);
  const [outputBase64, setOutputBase64] = useState('');
  const [outputFile, setOutputFile] = useState<File | null>(null);
  const [error, setError] = useState('');

  const handleBase64ToFile = useCallback(() => {
    if (!base64Input) {
      setError('Please provide a Base64 string');
      return;
    }

    try {
      const binaryString = atob(base64Input); // Decode the Base64 string
      const length = binaryString.length;
      const bytes = new Uint8Array(length);

      for (let i = 0; i < length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      // Convert to Blob and then to File
      const blob = new Blob([bytes]);
      const file = new File([blob], 'converted-file');
      setOutputFile(file);
      setError('');
    } catch (err) {
      setError('Error converting Base64 to File: ' + (err as Error).message);
    }
  }, [base64Input]);

  const handleFileToBase64 = useCallback((file: File) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result as string;
      setOutputBase64(base64String.split(',')[1]); // Remove data URL part
      setError('');
    };

    // reader.onerror = (err) => {
    //   setError('Error reading file: ' + err?.message);
    // };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setError('Please select a file');
    }
  }, []);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Base64 to File Converter</h2>
        <p className="text-muted-foreground">Convert Base64 string to a File and vice-versa</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Base64 to File */}
        <div className="space-y-2">
          <Label htmlFor="base64-input">Base64 String</Label>
          <Textarea
            id="base64-input"
            placeholder="Enter Base64 string"
            value={base64Input}
            onChange={(e) => setBase64Input(e.target.value)}
            className="min-h-[200px] resize-none"
          />
          <Button onClick={handleBase64ToFile} className="w-full">
            Convert to File
          </Button>

          {outputFile && (
            <div>
              <p className="text-sm font-semibold">Converted File:</p>
              <a href={URL.createObjectURL(outputFile)} download="converted-file" className="text-blue-500 hover:underline">
                Download File
              </a>
            </div>
          )}
        </div>

        {/* File to Base64 */}
        <div className="space-y-2">
          <Label htmlFor="file-input">Select a File</Label>
          <input
            type="file"
            id="file-input"
            onChange={(e) => {
              if (e.target.files) {
                setFileInput(e.target.files[0]);
                handleFileToBase64(e.target.files[0]);
              }
            }}
            className="w-full"
          />
          {outputBase64 && (
            <div>
              <p className="text-sm font-semibold">Base64 Encoded String:</p>
              <Textarea
                value={`data:${fileInput?.type};base64,${outputBase64}`}
                readOnly
                className="min-h-[200px] resize-none"
              />
            </div>
          )}
        </div>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}

