// hide cases
function hideCases() {
  document.querySelector("div.start").hidden = false;
  const cases = document.querySelectorAll("div.case");
  for (let i = 0; i < cases.length; i++) {
    cases[i].hidden = true;
  }
}

function configure(className, nextClassName) {
  const links = document.querySelectorAll(`div.${className} > .next > a`)
  for (let i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
      console.log(`Hide ${className}, show ${nextClassName} ${e.target.className}`);
      const elementsToHide = document.querySelectorAll(`div.${className}`)
      for (let k = 0; k < elementsToHide.length; k++) {
        elementsToHide[k].hidden = true;
      }
      document.querySelector(`div.${nextClassName}.${e.target.className}`).hidden = false;
    }
  };
}

configure("start", "threat-to-human-safety");
configure("threat-to-human-safety", "child-sexual-abuse-materials");
configure("child-sexual-abuse-materials", "human-trafficking-opioids-threat-to-safety");
configure("human-trafficking-opioids-threat-to-safety", "content-on-a-platform");
configure("content-on-a-platform", "malware-botnets-phising-pharming");
configure("malware-botnets-phising-pharming", "issue-with-domain-name");
configure("issue-with-domain-name", "issue-trademark-related");
configure("issue-trademark-related", "issue-cybersquatting");
configure("issue-cypersquatting", "");
configure("issue-with-domain-name","issue-content-on-website");
configure("issue-content-on-website", "website-administrator-contacted");
configure("website-administrator-contacted", "domain-registrant-contacted");
configure("domain-registrant-contacted", "webhost-contacted");


const restartLinks = document.querySelectorAll("a.restart");
for (let i = 0; i < restartLinks.length; i++) {
  restartLinks[i].onclick = function(e) {
    hideCases();
  };
}

hideCases();
