// src/types/mockjs.d.ts

declare module 'mockjs' {
  interface MockHandler {
    (options: {
      url: string
      type: string
      body: string
    }): unknown
  }

  interface Mock {
    mock(url: string | RegExp, template: object | MockHandler): void
  }

  const Mock: Mock
  export default Mock
}