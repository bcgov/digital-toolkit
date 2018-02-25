require 'liquid'
require 'uri'

# Capitalize all words of the input
module CapitalizeAll
  def capitalize_all(words)

    allwords = words.tr("0-9", "").split(' ')
    donttouchwords = [ 'the', 'and', 'on', 'to', 'of', 'for' ]
    newwords = Array.new

    allwords.each do |word|
      if donttouchwords.include? word
        newwords.push word
      elsif word == "ocio"
        newwords.push "OCIO"
      elsif word == "bc"
        newwords.push "BC"
      elsif word == "ip"
        newwords.push "IP"
      else
        newwords.push word.capitalize
      end
    end

    return newwords.join(' ')

  end
end

Liquid::Template.register_filter(CapitalizeAll)
