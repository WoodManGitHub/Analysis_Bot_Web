module.exports = {
  apps: [{
    name: 'Analysis_Bot_Web',
    script: 'serve',
    env: {
      PM2_SERVE_PATH: './dist',
      PM2_SERVE_PORT: 8789
      // PM2_SERVE_SPA: 'true',
      // PM2_SERVE_HOMEPAGE: '/index.html'
    },
    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    // args: '--spa',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'node',
      host: 'localhost',
      port: '8789',
      ref: 'origin/master',
      repo: 'https://github.com/WoodManGitHub/Analysis_Bot_Web.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
}
