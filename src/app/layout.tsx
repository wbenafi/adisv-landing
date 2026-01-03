import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ADISV - Asociación de Desarrollo Integral de San Vicente',
  description: 'Trabajando juntos por el desarrollo sostenible de nuestra comunidad. Proyectos comunitarios, participación ciudadana y bienestar social en San Vicente, Costa Rica.',
  keywords: ['ADISV', 'San Vicente', 'Costa Rica', 'desarrollo comunitario', 'asociación de desarrollo', 'proyectos comunitarios'],
  authors: [{ name: 'ADISV' }],
  openGraph: {
    title: 'ADISV - Asociación de Desarrollo Integral de San Vicente',
    description: 'Trabajando juntos por el desarrollo sostenible de nuestra comunidad desde 1985.',
    type: 'website',
    locale: 'es_CR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
