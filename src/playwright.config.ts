import { defineConfig, devices } from '@playwright/test';
//import {TestOptions} from './test-options';

export default defineConfig({  //it is called as globle setting and same setting which can be add in project level also.
  timeout : 40000,
  globalTimeout : 60000,

  expect: {
    timeout: 2000
  },

  fullyParallel: true,

  
  retries: 0,
  //workers: process.env.CI ? 1 : undefined,
  //reporter: 'html',// we can change the reporter type like json
  reporter: [
    ['json',{outputFile: 'test-result/jsonReport.json'}],
    ['junit',{outputFile: 'test-result/junitReport.xml'}],
    ['allure-playwright']
  ],
  
  use: {
    baseURL: process.env.DEV === '1' ? 'https://www.letskodeit.com/practice'
           : process.env.Test === '1' ? 'https://www.amazon.in/'
            : 'https://www.amazon.in/',

    trace: 'on-first-retry',
    headless: false,    // optional — helps you see the window
    viewport: null,      // disables Playwright's default viewport size
    launchOptions: {
      args: ['--start-maximized'], // works for Chromium-based browsers
    },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'on'
  },

  projects: [
    {
      name: 'Dev',
      use: { ...devices['Desktop Chrome'] ,
      baseURL: 'https://www.amazon.in/' // the URL is for example on project it will different
      }
    },
    {
      name: 'Test',
      use: { ...devices['Desktop Chrome'] ,
      baseURL: 'https://www.amazon.in/'  // the URL is for example on project it will different
      }
    },
    {
      name: 'chromium',
      use: { 
        browserName: 'chromium'
       },
    },
    {
      name: 'firefox',
      use: { 
        browserName: 'firefox'
       },
    },
    {
      name: 'webkit',
      use: { 
        browserName: 'webkit'
       },
    },
    {
      name: 'Mobile',
      testMatch: 'mobileTest.spec.ts',
      use:{
        ...devices['Galaxy S24']
      }
    }
  ]
});
