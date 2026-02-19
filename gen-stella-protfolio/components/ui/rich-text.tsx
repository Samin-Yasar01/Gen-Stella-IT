'use client'

import React, { useEffect, useRef } from 'react'
import { Bold, Italic, Underline, List, ListOrdered, Link as LinkIcon, Trash } from 'lucide-react'

type Props = {
  value?: string
  onChange?: (html: string) => void
  placeholder?: string
  className?: string
}

export default function RichTextEditor({ value = '', onChange, placeholder, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (ref.current && value !== ref.current.innerHTML) ref.current.innerHTML = value
  }, [value])

  function exec(command: string, arg?: string) {
    document.execCommand(command, false, arg)
    onChange && onChange(ref.current?.innerHTML || '')
    ref.current?.focus()
  }

  function insertLink() {
    const url = window.prompt('Enter URL (https://...)')
    if (url) exec('createLink', url)
  }

  return (
    <div className={className}>
      <div className="flex gap-2 mb-2">
        <button
          type="button"
          onClick={() => exec('bold')}
          aria-label="Bold"
          title="Bold"
          className="p-2 rounded-md bg-gray-100 dark:bg-slate-800 text-sm"
        >
          <Bold size={16} />
        </button>

        <button
          type="button"
          onClick={() => exec('italic')}
          aria-label="Italic"
          title="Italic"
          className="p-2 rounded-md bg-gray-100 dark:bg-slate-800 text-sm"
        >
          <Italic size={16} />
        </button>

        <button
          type="button"
          onClick={() => exec('underline')}
          aria-label="Underline"
          title="Underline"
          className="p-2 rounded-md bg-gray-100 dark:bg-slate-800 text-sm"
        >
          <Underline size={16} />
        </button>

        <button
          type="button"
          onClick={() => exec('insertUnorderedList')}
          aria-label="Unordered list"
          title="Bullet list"
          className="p-2 rounded-md bg-gray-100 dark:bg-slate-800 text-sm"
        >
          <List size={16} />
        </button>

        <button
          type="button"
          onClick={() => exec('insertOrderedList')}
          aria-label="Ordered list"
          title="Numbered list"
          className="p-2 rounded-md bg-gray-100 dark:bg-slate-800 text-sm"
        >
          <ListOrdered size={16} />
        </button>

        <button
          type="button"
          onClick={insertLink}
          aria-label="Insert link"
          title="Insert link"
          className="p-2 rounded-md bg-gray-100 dark:bg-slate-800 text-sm"
        >
          <LinkIcon size={16} />
        </button>

        <button
          type="button"
          onClick={() => {
            if (ref.current) {
              ref.current.innerHTML = ''
              onChange && onChange('')
            }
          }}
          aria-label="Clear content"
          title="Clear"
          className="p-2 rounded-md bg-gray-100 dark:bg-slate-800 text-sm"
        >
          <Trash size={16} />
        </button>
      </div>

      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        onInput={() => onChange && onChange(ref.current?.innerHTML || '')}
        className="min-h-[140px] rounded-lg border border-gray-200 dark:border-slate-800 px-3 py-3 text-sm bg-white dark:bg-slate-950 focus:outline-none"
        data-placeholder={placeholder}
        style={{ whiteSpace: 'pre-wrap' }}
      />
    </div>
  )
}
