class ChallengesController < ApplicationController
  before_action :set_challenge, only: %i[show edit update destroy]

  def index
  end
  
  def new
    @challenge = Challenge.new
  end
  
  def create
    @challenge = Challenge.new(challenge_params)
    @challenge.user_id = current_user

    if @challenge.save
      redirect_to @challenge, success: 'challenge was successfully created.'
    else
      render :new
    end
  end

  def edit; end
  
  def update
    if @challenge.update(challenge_params)
      redirect_to @challenge, success: 'challenge was successfully updated.'
    else
      render :edit
    end
  end
  
  def destroy
    @challenge.destroy
    redirect_to challenges_path, success: 'challenge was successfully destroyed.'
  end

  private

  def set_challenge
    @challenge = Challenge.find(params[:id])
  end

  def challenge_params
    params.require(:challenge).permit(:title, :genre, :title, :limit_people, :current_people, :limit_date, :canvas_gif)
  end
end