class UserMailer < ApplicationMailer
  default from: 'notifications@example.com'

  def welcome_email(info)
      @nombre = info[:author]
      @correo = info[:email]
      @telefono = info[:phone]
      @ciudad = info[:ciudad]
      @departamento = info[:departamento]
      @lista = info[:motolist]
      @cuota = info[:cuota]
      @plazo = info[:plazo]


      mail(to: "saraisabelsantacruz@gmail.com", subject: 'Solicitud financiacion yamaha').deliver!

  end
end
