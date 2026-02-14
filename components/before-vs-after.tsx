const beforeItems = [
  { text: 'Downloads folder chaos', icon: 'folder' },
  { text: '500 random screenshots', icon: 'image' },
  { text: 'Searching manually', icon: 'search' },
  { text: '"Where did I save that?"', icon: 'question' },
]

const afterItems = [
  { text: 'Type \u2192 Found instantly', icon: 'bolt' },
  { text: 'Everything searchable', icon: 'search' },
  { text: 'Zero folder stress', icon: 'check' },
  { text: 'Calm digital workspace', icon: 'peace' },
]

const XIcon = () => (
  <svg className="w-5 h-5 text-destructive flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

export default function BeforeVsAfter() {
  return (
    <section className="w-full py-20 md:py-28 bg-secondary/20 border-y border-border">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="space-y-12">
          {/* Section heading */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Before vs After
            </h2>
            <p className="text-lg text-muted-foreground">
              See the difference AltDump makes in your daily workflow.
            </p>
          </div>

          {/* Comparison grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="bg-background border border-border rounded-xl p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Before AltDump</h3>
              </div>
              <div className="space-y-4">
                {beforeItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <XIcon />
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="bg-background border border-accent/30 rounded-xl p-8 space-y-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-accent/[0.02]" />
              <div className="relative flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">After AltDump</h3>
              </div>
              <div className="relative space-y-4">
                {afterItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckIcon />
                    <p className="text-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
