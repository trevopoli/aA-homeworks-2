json.array! @parties do |party|
    json.extract! party, :name, :location
    json.guests do 
        json.array! party.guests, :name, :age, :favorite_color
    end
end