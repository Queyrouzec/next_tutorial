module.exports = {
  apps: [{
    name: 'next_tutorial',
    script: 'bun',
    args: 'start',
    env: {
      port: 3000,
      NODE_ENV: 'production'
    }
  }]
}
