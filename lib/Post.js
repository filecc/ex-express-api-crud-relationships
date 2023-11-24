const slugGenerator = require('./slugGenerator');

class Post {
    title;
    content;
    slug;
    published;
    image;
    category;
    tags;

    constructor(title, slug, content, published, image, category, tags){
        this.title = title;
        this.slug = slug;
        this.content = content;
        this.published = published;
        this.image = image;
        this.category = category;
        this.tags = tags;
      
    }
}

module.exports = Post;