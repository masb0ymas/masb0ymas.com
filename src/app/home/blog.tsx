import CardPost from '~/components/custom/card-post'
import SeeMore from '~/components/custom/see-more'
import { Separator } from '~/components/ui/separator'

const posts = [
  {
    title: 'How to Use GitHub Actions for CI/CD and Push to Google Artifact Registry',
    description:
      'A guide to setting up a CI/CD workflow using GitHub Actions to automate the build and deployment process and push artifacts to Google Artifact Registry.',
    link: '/blog/how-to-use-github-actions-for-ci-cd-and-push-to-google-artifact-registry',
    thumbnail: '/static/blog/ci-cd-github-actions-gcp/github_action_build_success.webp',
    date: '2024-11-04',
    tags: ['Docker', 'CI/CD', 'GitHub Actions'],
  },
  {
    title: 'How to Install React Native on Different Platforms?',
    description:
      'How to Install React Native on Different Platforms? This guide provides a step-by-step tutorial on installing React Native across various platforms, including Windows, macOS, and Linux.',
    link: '/blog/how-to-install-react-native-on-different-platforms',
    thumbnail: '/static/blog/ci-cd-github-actions-gcp/github_action_build_success.webp',
    date: '2024-10-24',
    tags: ['React Native', 'CLI'],
  },
  {
    title: 'How to Use Environment Variables in Sveltekit',
    description:
      'This blog post provides a comprehensive guide on using environment variables in SvelteKit to manage configurations and sensitive data securely.',
    link: '/blog/how-to-use-environment-variables-in-sveltekit',
    thumbnail: '/static/blog/sveltekit/svelte.webp',
    date: '2024-10-14',
    tags: ['SvelteKit', 'Environment Variables'],
  },
]

export default function FeaturedPosts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:py-20">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-neutral-800 lg:text-5xl dark:text-white">
          Featured <span className="text-primary-200 dark:text-primary-100">Posts</span>
        </h2>
        <p className="text-sm text-neutral-600 lg:text-lg dark:text-neutral-200">
          Some articles I&apos;ve written
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        {posts.map((post, index) => (
          <div key={index}>
            <CardPost {...post} />
            {index !== posts.length - 1 && <Separator className="mt-4" />}
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center">
        <SeeMore label="See more posts" link="/blog" />
      </div>
    </section>
  )
}
