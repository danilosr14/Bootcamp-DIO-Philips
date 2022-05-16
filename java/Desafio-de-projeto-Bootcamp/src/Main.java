import br.com.dio.desafio.dominio.*;

import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        Curso curso1 = new Curso();
        curso1.setTitulo("Curso Java");
        curso1.setDescricao("Descrição curso java");
        curso1.setCargaHoraria(8);

        Curso curso2 = new Curso();
        curso2.setTitulo("Curso Js");
        curso2.setDescricao("Descrição curso js");
        curso2.setCargaHoraria(10);

        Mentoria mentoria1 = new Mentoria();
        mentoria1.setTitulo("mentoria de java");
        mentoria1.setDescricao("descrição mentoria java");
        mentoria1.setData(LocalDate.now());


        /*System.out.println(curso1);
        System.out.println(curso2);
        System.out.println(mentoria1);*/

        Bootcamp bootcamp = new Bootcamp();
        bootcamp.setNome("Bootcamp java developer");
        bootcamp.setDescricao("Descrição bootcamp java developer");
        bootcamp.getConteudos().add(curso1);
        bootcamp.getConteudos().add(curso2);
        bootcamp.getConteudos().add(mentoria1);

        Dev devDanilo = new Dev();
        devDanilo.setNome("Danilo");
        devDanilo.inscreverBootcamp(bootcamp);
        System.out.println("Conteúdos inscritos de Danilo" + devDanilo.getConteudosIncritos());
        devDanilo.progredir();
        devDanilo.progredir();
        System.out.println("-");
        System.out.println("Conteúdos inscritos de Danilo" + devDanilo.getConteudosIncritos());
        System.out.println("Conteúdos concluídos de Danilo" + devDanilo.getConteudosConcluidos());
        System.out.println("XP" + devDanilo.calcularTotalXp());

        System.out.println("--------");

        Dev devCamila = new Dev();
        devCamila.setNome("Camila");
        devCamila.inscreverBootcamp(bootcamp);
        System.out.println("Conteúdos inscritos de Camila" + devCamila.getConteudosIncritos());
        

        devCamila.progredir();
        devCamila.progredir();
        devCamila.progredir();
        System.out.println("-");
        System.out.println("Conteúdos inscritos de Camila" + devCamila.getConteudosIncritos());
        System.out.println("Conteúdos concluídos de Camila" + devCamila.getConteudosConcluidos());
        System.out.println("XP" + devCamila.calcularTotalXp());


    }
}
