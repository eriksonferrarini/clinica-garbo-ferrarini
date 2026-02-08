import { NextResponse } from 'next/server'

export function middleware(req) {
  // Defina sua senha aqui (usuário: admin)
  const userCorreto = 'admin'
  const senhaCorreta = 'humanista' 

  const basicAuth = req.headers.get('authorization')

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (user === userCorreto && pwd === senhaCorreta) {
      return NextResponse.next()
    }
  }

  return new NextResponse('Acesso restrito. Digite a senha.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Area Restrita"',
    },
  })
}
