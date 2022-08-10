package com.sabkar.attendance.graphql.resolver;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.sabkar.attendance.entity.transfer.DisciplineDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class DisciplineResolver implements GraphQLResolver<DisciplineDto> {
}
