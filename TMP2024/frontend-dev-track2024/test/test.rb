require 'HTTParty'

def fetch_comments
  url = 'https://jsonplaceholder.typicode.com/comments'
  HTTParty.get(url)
end

def filter_comments(post_id)
  comments = fetch_comments
  comments.select { |comment| comment['postId'] == post_id }
end

puts filter_comments(2)
