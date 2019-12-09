    var app = new Vue({
        el: '#app',
        data: {
            show: false,
            editable: false,
            newlinkname: "",
            newlinkurl: "",
            newlinkdescription: "",
            globaltaglist: ['test'],
            search: '',
            bookmarks: [
                {
                    text: 'Material Design Dev Tutorials',
                    hyperlink: 'https://material.io/collections/developer-tutorials/',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lectus ut turpis fermentum vestibulum. ',
                    taglist: ['testing', 'tag2'],
                    newtag: '',
                    favorited: false,
                    lastlocation: -1
                },
                {
                    text: 'Awesome Vue.js Resources',
                    hyperlink: 'https://github.com/vuejs/awesome-vue#youtube-channels',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lectus ut turpis fermentum vestibulum. ',
                    taglist: ['testing', 'tag2'],
                    newtag: '',
                    favorited: false,
                    lastlocation: -1
                },
                {
                    text: 'HackerNews',
                    hyperlink: 'https://news.ycombinator.com/',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lectus ut turpis fermentum vestibulum. ',
                    taglist: ['testing', 'tag2'],
                    newtag: '',
                    favorited: false,
                    lastlocation: -1
                },
                {
                    text: 'Zenhabits',
                    hyperlink: 'https://zenhabits.net',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lectus ut turpis fermentum vestibulum. ',
                    taglist: ['testing', 'tag2'],
                    newtag: '',
                    favorited: false,
                    lastlocation: -1
                },
                {
                    text: 'How to Get Rich by Naval Ravikant',
                    hyperlink: 'https://twitter.com/naval/status/1002103360646823936',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lectus ut turpis fermentum vestibulum. ',
                    taglist: ['testing', 'tag2'],
                    newtag: '',
                    favorited: false,
                    lastlocation: -1
                },
                {
                    text: 'How to Be Successful by Sam Altman',
                    hyperlink: 'http://blog.samaltman.com/how-to-be-successful',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lectus ut turpis fermentum vestibulum. ',
                    taglist: ['testing', 'tag2'],
                    newtag: '',
                    favorited: false,
                    lastlocation: -1
                },
                {
                    text: 'Design in Tech Report 2019',
                    hyperlink: 'https://designintech.report/2019/03/09/design-in-tech-report-2019/',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lectus ut turpis fermentum vestibulum. ',
                    taglist: ['testing', 'tag2'],
                    newtag: '',
                    favorited: false,
                    lastlocation: -1
                },
                {
                    text: '1000 True Fans',
                    hyperlink: 'https://kk.org/thetechnium/1000-true-fans/',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lectus ut turpis fermentum vestibulum. ',
                    taglist: ['testing', 'tag2'],
                    newtag: '',
                    favorited: false,
                    lastlocation: -1
                },
                {
                    text: 'Typewolf Adobe Fonts',
                    hyperlink: 'https://www.typewolf.com/adobe-fonts',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lectus ut turpis fermentum vestibulum. ',
                    taglist: ['testing', 'tag2'],
                    newtag: '',
                    favorited: false,
                    lastlocation: -1
                },
                {
                    text: 'Morning Rituals by Tim Ferriss ',
                    hyperlink: 'https://fhww.files.wordpress.com/2018/09/tim-ferriss-5-morning-rituals.pdf',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lectus ut turpis fermentum vestibulum. ',
                    taglist: ['testing', 'tag2'],
                    newtag: '',
                    favorited: false,
                    lastlocation: -1
                },
                {
                    text: 'CSSTricks ',
                    hyperlink: 'https://css-tricks.com',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lectus ut turpis fermentum vestibulum. ',
                    taglist: ['testing', 'tag2'],
                    newtag: '',
                    favorited: false,
                    lastlocation: -1
                },
                {
                    text: 'Google 2004 Founder Letter',
                    hyperlink: 'https://abc.xyz/investor founders-letters/2004-ipo-letter/',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lectus ut turpis fermentum vestibulum. ',
                    taglist: ['testing', 'tag2'],
                    newtag: '',
                    favorited: false,
                    lastlocation: -1
                },
                {
                    text: 'Pentagram',
                    hyperlink: 'http://www.pentagram.com/work/#/all/all/newest/',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lectus ut turpis fermentum vestibulum. ',
                    taglist: ['testing', 'tag2'],
                    newtag: '',
                    favorited: false,
                    lastlocation: -1
                },
                {
                    text: 'Sagmeister & Walsh',
                    hyperlink: 'https://sagmeisterwalsh.com/work/',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lectus ut turpis fermentum vestibulum. ',
                    taglist: ['testing', 'tag2'],
                    newtag: '',
                    favorited: false,
                    lastlocation: -1
                },
                {
                    text: 'Harvard Meta Lab',
                    hyperlink: 'https://metalabharvard.github.io/',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lectus ut turpis fermentum vestibulum. ',
                    taglist: ['testing', 'tag2'],
                    newtag: '',
                    favorited: false,
                    lastlocation: -1
                },
                {
                    text: 'MIT Media Lab',
                    hyperlink: 'https://www.media.mit.edu/research/?filter=projects',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lectus ut turpis fermentum vestibulum. ',
                    taglist: ['testing', 'tag2'],
                    newtag: '',
                    favorited: false,
                    lastlocation: -1
                },
                {
                    text: 'JSON Placeholder API',
                    hyperlink: 'https://jsonplaceholder.typicode.com/',
                    description: 'A fake online REST API tool for prototyping / testing simple http requests',
                    taglist: ['testing', 'tag2'],
                    newtag: '',
                    favorited: false,
                    lastlocation: -1
                                  
                }

        ]},
        methods: {
            addLink: function () {
                let newbookmark = {
                    text: this.newlinkname,
                    hyperlink: this.newlinkurl,
                    description: this.newlinkdescription,
                    taglist: ['newtag'],
                    favorited: false,
                    lastlocation: -1
                };
                this.bookmarks.splice(this.favoritedBookmarks().length, 0, newbookmark)
                this.newlinkname = "";
                this.newlinkurl = "";
                this.newlinkdescription = "";

                this.toggleShow()

                // post to firebase
                this.$http.post('https://roots-network-69742.firebaseio.com/chromes.json', newbookmark).then(function (data) {
                  console.log(data)
                })
            },
            toggleShow: function () {
                app.show = !app.show
            },
            toggleEdit: function () {
                app.editable = !app.editable
            },
            favoriteBookmark: function (link, event) {
                if (link.favorited) {
                    this.unfavorite(link);
                } else {
                    let linkLocation = app.bookmarks.indexOf(link)
                    link.lastlocation = linkLocation;
                    app.bookmarks.splice(linkLocation, 1)
                    app.bookmarks.unshift(link);
                    link.favorited = !link.favorited;
                    this.$http.put('https://roots-network-69742.firebaseio.com/chromes.json', this.bookmarks).then(function (data) {
                        console.log('PUT FAV')
                    })

                }
            },
            put: function (link) {
                this.$http.put('https://roots-network-69742.firebaseio.com/chromes.json', this.bookmarks).then(function (data) {
                    alert('Database Updated Succesfully');
                })
            },
            unfavorite: function (link, event) {
                console.log('running unfavorite')
                let linkLocation = app.bookmarks.indexOf(link)
                app.bookmarks.splice(linkLocation, 1)
                app.bookmarks.splice(link.lastlocation, 0, link)
                link.favorited = !link.favorited;
                this.$http.put('https://roots-network-69742.firebaseio.com/chromes.json', this.bookmarks).then(function (data) {
                    console.log('PUT UNFAV')
                })
            },
            removeBookmark: function (link) {
                let linkLocation = app.bookmarks.indexOf(link)
                if (linkLocation !== -1 && confirm("Are you sure you want to delete this bookmark?")) {
                    app.bookmarks.splice(linkLocation, 1)
                    this.$http.delete('https://roots-network-69742.firebaseio.com/chromes/' + link.id + '/.json', link.id).then(function (data) {
                        console.log('https://roots-network-69742.firebaseio.com/chromes/' + link.id + '/.json');
                    })
                }
            },
             favoritedBookmarks: function () {
                return this.bookmarks.filter((bookmark) => {
                    return bookmark.favorited === true;
                });
            },
            searchArray: function(nameKey, myArray) {
               for (var i=0; i < myArray.length; i++) {
                  if (myArray[i].name === nameKey) {
                    return myArray[i];
                  }
                }
            },
            searchArrayBool: function(nameKey, myArray) {
               for (var i=0; i < myArray.length; i++) {
                  if (myArray[i] === nameKey) {
                    return true;
                  }
                }
            },
            genglobaltaglist: function() {
              let result = [];
              for (i = 0; i < this.bookmarks.length; i++ ) {
                // if statement for case where taglist = undefined
                if (this.bookmarks[i].taglist) {
                  for (j = 0; j < this.bookmarks[i].taglist.length; j++) {
                   // IF THE TAG IS IN THE LIST increase the count
                   // if Result has an object with this key
                   let key = this.bookmarks[i].taglist[j].toString()
                    if (this.searchArray(key, result)) {
                      let sameTag = result.find(x => x.name === key.toString())
                      sameTag.count++
                    }
                    // ELSE add the tag
                    else {
                      result.push({name: key, count: 1})
                    }
                  
                  }
                }
                
              }
              return result;
            },
            removeTag: function (link, tag) {
              for (i = 0; i < link.taglist.length; i++) {
                console.log('removetag', 'tag: ', tag, 'link.taglist[i]', link.taglist[i])
                console.log((tag === link.taglist[i]))
                if (tag === link.taglist[i]) {
                  link.taglist.splice(i, 1);
                }
              }
              this.$http.put('https://roots-network-69742.firebaseio.com/chromes.json', this.bookmarks).then(function (data) {
                    console.log('PUT removetag')
                })
            },
            addTag: function (link, tag) {
             link.taglist.push(link.newtag.toLowerCase());
             link.newtag = "";
             this.$http.put('https://roots-network-69742.firebaseio.com/chromes.json', this.bookmarks).then(function (data) {
                    console.log('PUT addTag')
                })
            },
            tagFilter: function(tag) {
              this.search = '_' + tag.name;
            }
        },

        created() {
            this.$http.get('https://roots-network-69742.firebaseio.com/chromes.json').then(function (data) {
                // this.bookmarks=data.body;
                return data.json()
            }).then(function (data) {
                let fireBookmarks = [];
                for (let key in data) {
                    if (data[key]) {
                        data[key].id = key;
                        fireBookmarks.push(data[key])
                    }
                    this.bookmarks = fireBookmarks;
                }
                // console.log(fireBookmarks)
                app.genglobaltaglist();
            })
        },
        computed: {
            filteredBookmarks: function () {
                return this.bookmarks.filter((bookmark) => {
                  // if searching by tag
                  if (bookmark.taglist && this.search.substring(0, 1) === '_') {
                     let searchCleaned = this.search.substring(1).toLowerCase()
                     console.log(this.searchArrayBool(searchCleaned, bookmark.taglist))
                     return this.searchArrayBool(searchCleaned, bookmark.taglist)
                     }
                     // if searching by title
                  else {
                    return bookmark.text.toLowerCase().match(this.search.toLowerCase())
                  }
                });
            },
            // generate a list of tags and their counts with counts over 10
            popularTagsList: function() {
               return this.genglobaltaglist().filter((bookmark) => {
                    return bookmark.count > 3;
                });

            }
        }
            
    })