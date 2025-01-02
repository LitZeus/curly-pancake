export default function Footer() {
  return (
    <footer className="py-6 md:py-0">
      <div className="container flex justify-center items-center h-16">
        <p className="text-sm text-muted-foreground bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
          © {new Date().getFullYear()} Your Name • Built with passion
        </p>
      </div>
    </footer>
  )
}

