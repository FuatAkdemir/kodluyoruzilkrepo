const posts = [
    {baslik: "Başlık 1", icerik: "İçerik 1", yazar: "Blog Yazarı 1"},
    {baslik: "Başlık 2", icerik: "İçerik 1", yazar: "Blog Yazarı 2"},
    {baslik: "Başlık 3", icerik: "İçerik 1", yazar: "Blog Yazarı 3"},
    {baslik: "Başlık 4", icerik: "İçerik 1", yazar: "Blog Yazarı 4"}
]

console.log("Şu anki gönderiler: ");
console.log(posts);

const listPosts = () => {
    posts.map((post) => {
        console.log(post);    
    });
}

const addPost = (newPost) => {
    console.log("Gönderi ekleniyor...");
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        console.log("Gönderi eklendi.");
        resolve(posts);
    });

    return promise1;

}

async function showPosts(){
    try {
        await addPost({baslik: "Başlık 7", icerik: "İçerik 7", yazar: "Blog Yazarı 7"});
        listPosts();
    } catch (error) {
        console.log(error);
    }
}

showPosts();

