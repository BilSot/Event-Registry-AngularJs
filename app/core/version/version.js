'use strict';

angular.module('eventsApp.version', [
  'eventsApp.version.interpolate-filter',
  'eventsApp.version.version-directive'
])

.value('version', '0.1');
