class DealController < ApplicationController
  layout :dynamic_layout

  def index
    render :layout => 'application'
  end

  def dynamic_layout
    params[:action]
  end
end
