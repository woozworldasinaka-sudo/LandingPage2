const reasons = [
  'You perfectly organize folders every day',
  'You never lose files',
  'Your desktop is always clean',
  'You enjoy searching manually',
]

export default function NotForYou() {
  return (
    <section className="w-full py-20 md:py-28 bg-background border-b border-border">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <div className="space-y-10">
          {/* Section heading */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              AltDump is NOT for you if:
            </h2>
          </div>

          {/* Reasons list */}
          <div className="space-y-4 max-w-md mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-5 py-4 bg-secondary/50 border border-border rounded-lg"
              >
                <svg className="w-5 h-5 text-muted-foreground flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                </svg>
                <p className="text-muted-foreground text-sm">{reason}</p>
              </div>
            ))}
          </div>

          {/* Subtle confidence note */}
          <p className="text-center text-sm text-muted-foreground/60">
            For everyone else — AltDump is exactly what you need.
          </p>
        </div>
      </div>
    </section>
  )
}
