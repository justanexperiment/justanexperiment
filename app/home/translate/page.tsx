'use client'

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/PM24cIEcnOx
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Translate() {
  return (
    <>
      <div className="grid w-full gap-6 lg:grid-cols-2 p-8">
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <Label htmlFor="source-language">Source Language</Label>
            <Select>
              <option>Auto</option>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </Select>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <Textarea
              className="w-full min-h-[200px] p-4 text-base font-normal border-0 resize-none"
              id="source-text"
              placeholder="Enter your text"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <Label htmlFor="target-language">Target Language</Label>
            <Select>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </Select>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <Textarea
              className="w-full min-h-[200px] p-4 text-base font-normal border-0 resize-none"
              id="translated-text"
              placeholder="Translation"
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-sm py-4">
        <Button className="ml-auto" type="submit">
          Submit
        </Button>
      </div>
    </>
  )
}
