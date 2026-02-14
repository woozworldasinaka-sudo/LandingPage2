'use client'

import { useCheckout } from '@/hooks/use-checkout'

export default function EmotionalHook() {
  const { createCheckout, isLoading } = useCheckout()

  return (
    <section className="w-full py-24 md:py-32 bg-secondary/20 border-y border-border">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            If you use your laptop daily, you need this.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AltDump automatically indexes your files so you can search like Google — but for your own computer.
          </p>
          <div className="pt-4">
            <button
              onClick={() => createCheckout()}
              disabled={isLoading}
              className="px-10 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Loading...' : 'Get AltDump Now'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
