import { NextResponse } from 'next/server'

export function middleware(req) {
  // Agora buscamos a senha do "Cofre" do servidor (Variável de Ambiente)
  // Se não tiver configurado, a senha padrão será 'admin' (apenas para fallback)
  const userCorreto = process.env.SITE_USER || 'admin'
  const senhaCorreta = process.env.SITE_PASSWORD || 'admin'

  const basicAuth = req.headers.get('authorization')

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (user === userCorreto && pwd === senhaCorreta) {
      return NextResponse.next()
    }
  }

  return new NextResponse('Acesso restrito.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Area Restrita"',
    },
  })
}
