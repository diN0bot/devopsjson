#  File Format

JSON

## URL



/devops.json

## Auth

FIGURE IT OUT

* htpassword or IP based restrictions are recommended.

# Information Provided

* Product Info / Description
 * What is it built in
 
````
  "name": "gutsy",
  "description": "Rackspace dashboard JSON interpreter",
  "tags": [
    "javascript",
    "express",
    "nodejs",
    "cloud"
  ],
````

* Pager Rotation ?
  * Ideally pagerduty api keys :(

* Related People
 * Dev Team
 * Operations Team
 * Support Team
 * Product Team
 * Security Team


````
    "contacts": {
        "devs": [{
            "name":"Weee Beeblebrox", (required)
            "github":"http://github.com/foobar",
            "sso":"weee.Beeblebrox",
            "mailto":"foobar@example.com",
            "ircnick":"zfoobar",
            "callto":"foobar",
            "tel":"+1.555.555.5555"},
            {
            "name": "Ford Prefect",
            "github":"http://github.com/bafd",
            "sso":"ford.prefect",
            "mailto":"ford.prefect@example.com",
            "ircnick":"ford"
            }],
        "ops": [{
            "name": "Zaphod Beeblebrox",
            "sso": "zaphod.beeblebrox"
          }, 
    }
````   
* Links
 * Docs
 * Dashboard
 * Code
 * Monitoring
 * Ticketing / Defects
 * CI System
 * CD System
 * Logs
 * IRC / Chat (http://tools.ietf.org/html/rfc5785)

````
    "links": {
        "code": "https://github.example.com/gutsy/gutsy",
        "docs": "https://github.example.com/gutsy/gutsy/wiki",
        "dashboard": "https://gutsy.dev.io",
        "code": "https://github.example.com/gutsy/gutsy",
        "monitoring": "https://cloudkick.com",
        "ticketing": "https://v1.k1k.me",
        "continuous_integration": "https://gutsy-bb.k1k.me",
        "continuous_deployment": "https://gutsy-dreadnot.k1k.me",
        "logging": "https://gutsy-log.k1k.me",
        "chat": "irc://irc.freenode.net:4443/gutsy-dev?4thestars"},
````

* Metadata
 * Current Version
 * Change Date? Changelog of API
  * Last deployed date?

````
    "metadata": {
        "current_version": "",
        "last_deployed": "1329538942"
    },
````

* Environments
 * URLs to Production, Staging, `devops.json`
 * Regions
  * URLs to US, UK, etc

````
    "environments": [{
        "type": "staging",
        "platforms": ["Ubuntu 10.4"],
        "url": {
          "url": "https://gutsy.example.com",
          "auth": {
            "type": "basic",
            "username": "gutsy",
            "password": ""}},
        "regions": []
    }],
````    

* Related APIs
 * PagerDuty?
 * NewRelic
 * Cloud Monitoring
  * add into read only user api keys
 * KPI.json SEE OTHER SPEC

````
    "related_apis": {
        "pager_duty": {
            "url": "",
            "apikey": ""},
        "new_relic": {
            "url": "",
            "apikey": ""}
    },
````

* Dependent Services
 * Opaque Strings, or, ideally links to a opsinfo.json
 * Auth
 * Usage
 * If you depend on cloud servers, etc

````
    "dependent_services": [
        "http://foo.api.example.com/devops.json",
        "http://auth.api.example.com/devops.json",
        "http://usage.api.example.com/devops.json"],
````
# KPI JSON spec

* Actual values
* URLs to get actual values (New Relic API url, but lists keys to use against it?)
