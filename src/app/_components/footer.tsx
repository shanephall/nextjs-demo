import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-12 flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="mb-2">Hillsdale Community Foundation</p>
          <p className="mb-2">P.O. Box 82995</p>
          <p className="mb-6">Portland, OR 97282</p>
          <div className="flex space-x-4">
            <a href="/get-involved" className="text-blue-600 hover:underline">Get Involved</a>
            <a href="/donate" className="text-blue-600 hover:underline">Donate</a>
            <a href="/contact" className="text-blue-600 hover:underline">Contact</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
