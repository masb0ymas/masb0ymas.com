import CardPost from '~/components/custom/card-post'
import { Separator } from '~/components/ui/separator'

const posts = [
  {
    title: 'How to Use GitHub Actions for CI/CD and Push to Google Artifact Registry',
    description:
      'A guide to setting up a CI/CD workflow using GitHub Actions to automate the build and deployment process and push artifacts to Google Artifact Registry.',
    slug: '/blog/how-to-use-github-actions-for-ci-cd-and-push-to-google-artifact-registry',
    thumbnail: '/static/blog/ci-cd-github-actions-gcp/github_action_build_success.webp',
    date: '2024-11-04',
    tags: ['Docker', 'CI/CD', 'GitHub Actions'],
  },
  {
    title: 'How to Install React Native on Different Platforms?',
    description:
      'How to Install React Native on Different Platforms? This guide provides a step-by-step tutorial on installing React Native across various platforms, including Windows, macOS, and Linux.',
    slug: '/blog/how-to-install-react-native-on-different-platforms',
    thumbnail: '/static/blog/ci-cd-github-actions-gcp/github_action_build_success.webp',
    date: '2024-10-24',
    tags: ['React Native', 'CLI'],
  },
  {
    title: 'How to Use Environment Variables in Sveltekit',
    description:
      'This blog post provides a comprehensive guide on using environment variables in SvelteKit to manage configurations and sensitive data securely.',
    slug: '/blog/how-to-use-environment-variables-in-sveltekit',
    thumbnail: '/static/blog/sveltekit/svelte.webp',
    date: '2024-10-14',
    tags: ['SvelteKit', 'Environment Variables'],
  },
]

export default function BlogList() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 lg:pb-20 md:px-6">
      <div className="mt-10 flex flex-col gap-4">
        {posts.map((post, index) => (
          <div key={index}>
            <CardPost {...post} />
            {index !== posts.length - 1 && <Separator className="mt-4" />}
          </div>
        ))}
      </div>
    </section>
  )
}
