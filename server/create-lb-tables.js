var server = require('./server');
var appModels = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];

var ds = server.dataSources.psqlDs;
ds.isActual(appModels, function(err, actual) {
  if (!actual) {
    ds.autoupdate(appModels, function(err) {
      if (err) throw (err);
      console.log('Loopback tables [' + appModels + '] created in ', ds.adapter.name);
    });
  }
});
