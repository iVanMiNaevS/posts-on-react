export default function getTotalPages(limit, totalPosts) {
    return Math.ceil(totalPosts / limit);
}
