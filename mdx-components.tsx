import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'

type HeadingProps = ComponentPropsWithoutRef<'h1'>
type ParagraphProps = ComponentPropsWithoutRef<'p'>
type ListProps = ComponentPropsWithoutRef<'ul'>
type ListItemProps = ComponentPropsWithoutRef<'li'>
type AnchorProps = ComponentPropsWithoutRef<'a'>
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>
type EmProps = ComponentPropsWithoutRef<'em'>
type StrongProps = ComponentPropsWithoutRef<'strong'>
type CodeProps = ComponentPropsWithoutRef<'code'>

const components = {
  h1: (props: HeadingProps) => (
    <h1 className="mb-0 pt-12 font-bold text-neutral-800 dark:text-neutral-50" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className="mt-8 mb-3 font-semibold text-neutral-800 dark:text-neutral-50" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className="mt-8 mb-3 font-semibold text-neutral-800 dark:text-neutral-50" {...props} />
  ),
  h4: (props: HeadingProps) => (
    <h4 className="font-medium text-neutral-800 dark:text-neutral-50" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p className="leading-snug text-neutral-600 dark:text-neutral-100" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol className="list-decimal space-y-2 pl-5 text-neutral-600 dark:text-neutral-100" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="list-disc space-y-1 pl-5 text-neutral-600 dark:text-neutral-100" {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: EmProps) => <em className="font-medium" {...props} />,
  strong: (props: StrongProps) => <strong className="font-medium" {...props} />,
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      'text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800'
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      )
    }
    if (href?.startsWith('#')) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      )
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
        {children}
      </a>
    )
  },
  code: (props: CodeProps) => {
    return <code className="text-primary-200 dark:text-primary-100" {...props} />
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-neutral-600 pl-4 text-neutral-600 dark:border-neutral-600 dark:text-neutral-100"
      {...props}
    />
  ),
}

declare global {
  type MDXProvidedComponents = typeof components
}

export function useMDXComponents(): MDXProvidedComponents {
  return components
}
