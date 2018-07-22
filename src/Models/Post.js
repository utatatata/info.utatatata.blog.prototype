class Post {
  constructor(title, author, email, revnumber, revdate, tags, summary, body) {
    this.title = title
    this.author = author
    this.email = email
    this.revnumber = revnumber
    this.revdate = revdate
    this.tags = tags
    this.summary = summary
    this.body = body
  }

  static fromObj(obj) {
    return new Post(
      obj.title,
      obj.author,
      obj.email,
      obj.revnumber,
      obj.revdate,
      obj.tags,
      obj.summary,
      obj.body
    )
  }
}

export default Post
