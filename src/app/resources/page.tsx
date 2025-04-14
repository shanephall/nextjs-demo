import Container from "@/app/_components/container";

export default function Resources() {
  return (
    <main>
      <Container>
        <div className="py-16">
          <h1 className="text-4xl font-bold mb-8">Community Resources</h1>
          
          <div className="space-y-12">
            <section className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-4">Solar Program</h2>
              <p className="text-lg mb-6">
                The Hillsdale Community Foundation supports sustainable energy initiatives 
                through our community solar program.
              </p>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Program Benefits:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Reduced energy costs</li>
                  <li>Environmental sustainability</li>
                  <li>Community investment</li>
                  <li>Educational resources</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-4">Hillsdale News</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Stay informed about local events, initiatives, and community updates 
                  through our various news channels:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded">
                    <h3 className="font-semibold mb-2">Monthly Newsletter</h3>
                    <p>Subscribe to our email newsletter for regular updates about:
                      <ul className="list-disc list-inside mt-2">
                        <li>Community events</li>
                        <li>Program announcements</li>
                        <li>Volunteer opportunities</li>
                        <li>Local news</li>
                      </ul>
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <h3 className="font-semibold mb-2">Community Bulletin</h3>
                    <p>Check our physical bulletin boards located at:
                      <ul className="list-disc list-inside mt-2">
                        <li>Hillsdale Library</li>
                        <li>Food Front Co-op</li>
                        <li>Basics Market</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <a href="/programs" className="block p-4 bg-gray-50 rounded hover:bg-gray-100">
                  <h3 className="font-semibold">Programs</h3>
                  <p className="text-sm text-gray-600">View our community programs</p>
                </a>
                <a href="/get-involved" className="block p-4 bg-gray-50 rounded hover:bg-gray-100">
                  <h3 className="font-semibold">Get Involved</h3>
                  <p className="text-sm text-gray-600">Volunteer opportunities</p>
                </a>
                <a href="/contact" className="block p-4 bg-gray-50 rounded hover:bg-gray-100">
                  <h3 className="font-semibold">Contact</h3>
                  <p className="text-sm text-gray-600">Get in touch with us</p>
                </a>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}