import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import { LogoutButton } from './logout-button'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const user = await getCurrentUser()
  if (!user) redirect('/login')

  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-ink">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/brand/fv-wordmark-white.png" alt="Future Voices" width={120} height={44} />
          </Link>
          <LogoutButton />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold mb-2">Parent portal</p>
        <h1 className="font-display text-3xl font-medium text-ink mb-10">Welcome, {user.full_name.split(' ')[0]}.</h1>

        <div className="grid sm:grid-cols-2 gap-6">
          {user.children.map(child => (
            <div key={child.name} className="bg-white border border-ink/10 rounded-xl p-7">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold mb-2">Student</p>
              <h2 className="font-display text-2xl font-medium text-ink">{child.name}</h2>
              {child.age && <p className="text-sm text-ink-500 mt-1">Age {child.age}</p>}
              <div className="rule-fade my-5" />
              <p className="text-sm text-ink-500 leading-relaxed">
                <span className="font-semibold text-ink">Program:</span>{' '}
                {child.program || 'To be decided on your intro call'}
              </p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-ink bg-cream px-3 py-1.5 rounded-full">
                <span className="h-2 w-2 rounded-full bg-gold" />
                Enrolment pending. We will be in touch.
              </p>
            </div>
          ))}

          <div className="bg-ink text-white rounded-xl p-7 flex flex-col justify-between gap-6">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-300 mb-2">Next step</p>
              <h2 className="font-display text-2xl font-medium mb-3">Your intro call</h2>
              <p className="text-sm text-white/65 leading-relaxed">
                We&rsquo;ve received your registration. We will reach out at{' '}
                <span className="text-white font-medium">{user.email}</span> within a day to set up a
                15-minute call and place {user.children[0]?.name ?? 'your child'} in the right cohort.
              </p>
            </div>
            <a
              href="mailto:hello@futurevoices.co"
              className="text-sm font-semibold underline underline-offset-4 decoration-gold-300 hover:decoration-white w-fit"
            >
              Questions? hello@futurevoices.co
            </a>
          </div>
        </div>

        <div className="mt-10 bg-white border border-ink/10 rounded-xl p-7">
          <h2 className="font-display text-xl font-medium text-ink mb-4">While you wait</h2>
          <ul className="flex flex-col gap-2.5 text-sm text-ink-500">
            <li>
              <Link href="/curriculum" className="text-ink font-medium underline underline-offset-4 decoration-gold hover:decoration-ink">
                Read the full curriculum
              </Link>
              : the six levels, and every week of Level 1.
            </li>
            <li>
              <Link href="/safeguarding" className="text-ink font-medium underline underline-offset-4 decoration-gold hover:decoration-ink">
                Our safeguarding policy
              </Link>
              : how we run safe online sessions for kids.
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
