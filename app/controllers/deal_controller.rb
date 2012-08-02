class DealController < ApplicationController
  layout :dynamic_layout

  def dynamic_layout
    params[:action]
  end
end
