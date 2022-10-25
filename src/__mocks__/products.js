import { v4 as uuid } from 'uuid';
import { config } from '../config'
export const products = [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    media: `${config.serverDomain}/img/img(6).png`,
    title: 'Dropbox',
    totalDownloads: '594'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
    media: `${config.serverDomain}/img/img(12).png`,
    title: 'Medium Corporation',
    totalDownloads: '625'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
    media: `${config.serverDomain}/img/img(18).png`,
    title: 'Slack',
    totalDownloads: '857'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Lyft is an on-demand transportation company based in San Francisco, California.',
    media: `${config.serverDomain}/img/img(25).png`,
    title: 'Lyft',
    totalDownloads: '406'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'GitHub is a web-based hosting service for version control of code using Git.',
    media: `${config.serverDomain}/img/img(47).png`,
    title: 'GitHub',
    totalDownloads: '835'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
    media: `${config.serverDomain}/img/img(112).png`,
    title: 'Squarespace',
    totalDownloads: '835'
  }
];
