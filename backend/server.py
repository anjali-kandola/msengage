from flask import Flask
from flask import request
from flask_cors import CORS
import pickle
model = pickle.load(open('RF_price_predicting_model.pkl', 'rb'))
app = Flask(__name__)
CORS(app)
@app.route("/predict", methods=['POST', 'GET'])
def predict():
    if request.method == 'POST':
        print("Inside the server")
        data = request.get_json()
        Model = model
        Present_Price = data['Present_Price']
        Kms_Driven = data['Kms_Driven']
        Owner = data['Owner']
        Years_old = data['Years_old']
        Fuel_Type_Diesel = data['Fuel_Type_Diesel']
        Fuel_Type_Petrol = data['Fuel_Type_Petrol']
        seller_Type_Individual = data['seller_Type_Individual']
        Transmission_Mannual = data['Transmission_Mannual']
        prediction = Model.predict([[Present_Price, Kms_Driven, Owner, Years_old, Fuel_Type_Diesel,
                                   Fuel_Type_Petrol, seller_Type_Individual, Transmission_Mannual]])
        output = round(prediction[0], 4)
        return {"Output": output}
    return {"Error 500": "Internal server error"}


if __name__ == "__main__":
    app.run(debug=True)
