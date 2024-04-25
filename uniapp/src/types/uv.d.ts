declare module '@climblee/uv-ui' {
  export function install(): void

  interface config {
    // 单位
    unit: string
  }

  interface props {
    // text
    text: object
  }
  interface $uv {
    config: config
    props: props
  }

  global {
    interface Uni {
      $uv: $u
    }
  }
}
