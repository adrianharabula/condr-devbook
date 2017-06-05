// big part of code from offline-issues
// https://github.com/jlord/offline-issues

var fs = require('fs')
var path = require('path')

var handlebars = require('handlebars')
var mkdirp = require('mkdirp')

var mdlist = '## Issues\n\n'

mkdirp('issues', function (err) {
  if (err) return console.log('Error creating md directory.')
})

var issues = fs.readFileSync('issues.json')
issues = JSON.parse(issues)

// sort issues by id
issues.sort(function(a, b) {
    return parseFloat(a.id) - parseFloat(b.id);
});

issues.forEach(function (issue) {
  issue['issueid'] = issueID(issue.url)
  var filename = repoDetails(issue.url)
  var source = fs.readFileSync(path.join(__dirname, '/templates/markdown.hbs'))
  var template = handlebars.compile(source.toString(), {noEscape: true})
  var result = template(issue)
  fs.writeFile('issues/' + filename + '.md', result, function (err) {
    if (err) console.log('Error writing md file.')
  })

  // add generated mdfile to link list
  mdlist += ' * ['+gettype(issue.url)+' #' + issue['issueid'] + ' - '+issue.title+'](issues/'+filename+'.md)\n'
})

console.log('Wrote markdown files.')

fs.writeFile('SUMMARY_issues.md', mdlist, function (err) {
  if (err) console.log('error writing SUMMARY_issues.md file')
})

function appendzero (issue) {
  var a = issue.split('/')
  if(a[6] < 10) a[6] = '00' + a[6]
    else
  if(a[6] < 100) a[6] = '0' + a[6]
  return a[6]
}

function repoDetails (issue) {
  var filename = 'issue-' + appendzero(issue)
  return filename
}

function gettype (issue) {
  var a = issue.split('/')
  if (a[5] == 'pull')
    return 'Pull'
  else
    return 'Issue' 
}

function issueID (issue) {
  var a = issue.split('/')
  return a[6]
}
