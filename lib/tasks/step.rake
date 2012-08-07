desc "Add a new step"
task :step_dup do
  step = ENV['STEP']
  raise "STEP argument required; usage: rake step_dup STEP=3" unless step
  step = step.to_i
  `cp -r #{Rails.root}/app/assets/javascripts/step_#{step} #{Rails.root}/app/assets/javascripts/step_#{step + 1}`
  `cp -r #{Rails.root}/app/assets/stylesheets/step_#{step} #{Rails.root}/app/assets/stylesheets/step_#{step + 1}`
  `cp #{Rails.root}/app/views/layouts/stacks.html.erb #{Rails.root}/app/views/layouts/step_#{step + 1}.html.erb`
  `cp #{Rails.root}/app/views/deal/stacks.html.erb #{Rails.root}/app/views/deal/step_#{step + 1}.html.erb`
  `cp -r #{Rails.root}/spec/javascripts/step_#{step} #{Rails.root}/spec/javascripts/step_#{step + 1}`
end
