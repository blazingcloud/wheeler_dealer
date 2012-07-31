namespace :wheel do
  desc 'pull latest from wheel'
  task :pull do
    `cp -r $P/wheel.js/lib/wheel/ vendor/assets/javascripts/wheel/`
  end

  desc 'push latest from wheel'
  task :push do
    `cp -r vendor/assets/javascripts/wheel/ $P/wheel.js/lib/wheel/`
  end
end
