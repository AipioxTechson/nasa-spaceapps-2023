export const metadata = {
  title: 'Space Escape!',
  description: 'Escape into space for your next journey around the Solar System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
        <body>
          {children}
          </body>
    </html>
  )
}
