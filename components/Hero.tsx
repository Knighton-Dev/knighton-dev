export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-forest-400 to-forest-300 bg-clip-text text-transparent">
            Knighton Dev LLC
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            Platform, DevOps & Site Reliability Engineering
          </p>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            We deliver expert cloud migrations, Kubernetes orchestration, and infrastructure as code solutions, 
            backed by over a decade of experience modernizing and maintaining enterprise systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-forest-600 hover:bg-forest-500 text-white rounded-lg text-lg font-semibold transition-colors"
            >
              Start a Project
            </a>
            <a 
              href="#experience" 
              className="px-8 py-4 border-2 border-forest-600 hover:border-forest-500 text-forest-400 rounded-lg text-lg font-semibold transition-colors"
            >
              Our Approach
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-slate-900/50 rounded-lg border border-forest-800/30">
            <div className="text-4xl font-bold text-forest-400 mb-2">Enterprise</div>
            <div className="text-gray-400">Proven Track Record</div>
          </div>
          <div className="p-6 bg-slate-900/50 rounded-lg border border-forest-800/30">
            <div className="text-4xl font-bold text-forest-400 mb-2">AWS • GCP • Azure</div>
            <div className="text-gray-400">Multi-Cloud Expertise</div>
          </div>
          <div className="p-6 bg-slate-900/50 rounded-lg border border-forest-800/30">
            <div className="text-4xl font-bold text-forest-400 mb-2">K8s • Terraform • CI/CD</div>
            <div className="text-gray-400">Modern DevOps Stack</div>
          </div>
        </div>
      </div>
    </section>
  );
}
