class DealController < ApplicationController
  layout :dynamic_layout

  def simple
  end

  def clean_and_simple
  end

  def dynamic_layout
    params[:action]
  end
end
