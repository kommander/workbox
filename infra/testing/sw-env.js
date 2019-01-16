/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const serviceWorkerMock = require('service-worker-mock');
const fetch = require('service-worker-mock/fetch');

Object.assign(global, serviceWorkerMock({
  userAgent: 'Workbox User Agent',
  locationUrl: 'https://example.com',
  useRawRequestUrl: true,
}), {
  fetch,
  self: global,
});
