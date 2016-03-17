class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]

  # GET /comments
  # GET /comments.json
  def index
    @comments = Comment.all

    render json: @comments
    #render json: { comments: Comment.all }, methods: :post_id
    #render json: { posts: Post.all, comments: Comment.all }, methods: :comment_ids
  end

  # GET /comments/1
  # GET /comments/1.json
  def show
    render json: @comment
    #render json: { comment: @comment }, methods: :post_id
    #render json: { post: @post, comments: @post.comments }, methods: :comment_ids
  end

  # POST /comments
  # POST /comments.json
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment, status: :created, location: @comment
      #render json: { comment: @comment }, methods: :post_id, status: :created, location: @comment
      #render json: { post: @post, comments: @post.comments }, methods: :comment_ids, status: :created, location: @post
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  # PATCH/PUT /comments/1.json
  def update
    @comment = Comment.find(params[:id])

    if @comment.update(comment_params)
      head :no_content
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy
    @comment.destroy

    head :no_content
  end

  private

    def set_comment
      @comment = Comment.find(params[:id])
    end

    def comment_params
      params.require(:comment).permit(:author, :body, :post)
    end
end
